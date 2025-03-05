import { Cascader, Input } from "antd";
import React from "react";
import { Buyer } from "./Api";

export type SearchFilters = {
  searchQuery: string;
  buyerId: string;
};

interface Option {
  value: string;
  label: string;
}

type Props = {
  filters: SearchFilters;
  onChange: (newFilters: SearchFilters) => void;
};

function RecordSearchFilters(props: Props) {
  const { filters, onChange } = props;

  const cascaderOptions: Option[] = [
    {
      value: "4f5g64-f454",
      label: "moneybags"
    },
    {
      value: "g4567b7v5-v5",
      label: "big pockets"
    },
    {
      value: "vf5376ubv5-5v5",
      label: "dollars"
    },
  ]

  const handleQueryChange = React.useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      onChange({
        ...filters,
        searchQuery: e.currentTarget.value,
      });
    },
    [onChange, filters]
  );

  const handleBuyerFilterChange = React.useCallback(
    (cascaderValue: string[]) => {
      onChange({
        ...filters,
        buyerId: cascaderValue ? cascaderValue[0] : "",
      })
    },
    [onChange, filters]
  )

  return (
    <div className="search-filter-container">
      <Input
        placeholder="Search text..."
        value={filters.searchQuery}
        onChange={handleQueryChange}
      />
      <Cascader
        options={cascaderOptions}
        value={[filters.buyerId]}
        onChange={handleBuyerFilterChange}
        placeholder="Select buyer"
      />
    </div>
  );
}

export default RecordSearchFilters;
