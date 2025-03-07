export type RecordSearchRequest = {
  textSearch?: string;
  buyerId?: string;
  offset: number;
  limit: number;
};

export type BuyerDto = {
  id: string;
  name: string;
};

export type ProcurementRecordDto = {
  id: string;
  title: string;
  description: string;
  buyer: BuyerDto;
  publishDate: string;
  value: number | null;
  currency: string | null;
  stage: "TENDER" | "CONTRACT";
  close_date: string | null;
  award_date: string | null;
};

export type RecordSearchResponse = {
  records: ProcurementRecordDto[];
  endOfResults: boolean; // this is true when there are no more results to search
};
