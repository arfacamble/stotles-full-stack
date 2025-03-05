import { Table } from "antd";
import { ColumnType } from "antd/lib/table";
import React from "react";
import { ProcurementRecord } from "./Api";
import ProcurementRecordPreviewModal from "./ProcurementRecordPreview";

type Props = {
  records: ProcurementRecord[];
};

function RecordsTable(props: Props) {
  const { records } = props;
  const [previewedRecord, setPreviewedRecord] = React.useState<
    ProcurementRecord | undefined
  >();

  const columns = React.useMemo<ColumnType<ProcurementRecord>[]>(() => {
    return [
      {
        title: "Published",
        render: (record: ProcurementRecord) =>
          new Date(record.publishDate).toLocaleDateString(),
      },
      {
        title: "Title",
        render: (record: ProcurementRecord) => {
          const handleClick = (e: React.MouseEvent) => {
            e.preventDefault();
            setPreviewedRecord(record);
          };
          return (
            <a href="#" onClick={handleClick}>
              {record.title}
            </a>
          );
        },
      },
      {
        title: "Buyer name",
        render: (record: ProcurementRecord) => record.buyer.name,
      },
      {
        title: "Value",
        render: (record: ProcurementRecord) => {
          if (!record.value) { return null }

          if (!record.currency) { return record.value }

          try {
            return record.value.toLocaleString('en-UK', { style: 'currency', currency: record.currency, minimumFractionDigits: 0 })
          } catch (error) {
            // log error -> consider restricting strings saved to currency column to ISO 4217 currency codes
            return `${record.value} ${record.currency}`
          }

        }
      },
      {
        title: "Stage",
        render: (record: ProcurementRecord) => {
          if (record.stage === 'CONTRACT') {
            return `Awarded on ${ record.award_date }`
          } else {
            return `Open until ${ record.close_date }`
          }
        }
      }
    ];
  }, []);
  return (
    <>
      <Table columns={columns} dataSource={records} pagination={false} rowKey={record => record.id} />
      <ProcurementRecordPreviewModal
        record={previewedRecord}
        onClose={() => setPreviewedRecord(undefined)}
      />
    </>
  );
}

export default RecordsTable;
