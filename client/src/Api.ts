export type SearchRecordsRequest = {
  textSearch?: string;
  buyerId?: string;
  limit: number;
  offset: number;
};

export type Buyer = {
  id: string;
  name: string;
}

export type ProcurementRecord = {
  id: string;
  title: string;
  description: string;
  publishDate: string;
  value: number | null;
  currency: string | null;
  stage: "TENDER" | "CONTRACT";
  close_date: string | null;
  award_date: string | null;
  buyer: Buyer;
};

export type SearchRecordsResponse = {
  records: ProcurementRecord[];
  endOfResults: boolean;
};

class Api {
  async searchRecords(
    request: SearchRecordsRequest
  ): Promise<SearchRecordsResponse> {
    const queryString = Object.entries(request).map(([key, value]) => value !== "" && `${key}=${value}`).filter(x => x).join("&")
    const response = await fetch(`/api/records?${queryString}`);
    return await response.json();
  }
}

export default Api;
