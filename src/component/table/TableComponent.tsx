import React from 'react';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
    key: number;
    walletAddress: string;
    heart: string;
}

const columns: ColumnsType<DataType> = [
    {
        title: '',
        dataIndex: 'key',
        key: 'key',
        render: (_text, _record, index) => index + 1,
        width: '5%',
        align: 'center',
    },
    {
        title: 'Wallet Address',
        dataIndex: 'walletAddress',
        key: 'walletAddress',
        align: 'center',
        render: (text) => (
            <div className="whitespace-nowrap overflow-hidden text-ellipsis">
                {text}
            </div>
        ),
    },
    {
        title: 'HEART',
        dataIndex: 'heart',
        key: 'heart',
        align: 'right',
    },
];

const data: DataType[] = [];
for (let i = 1; i <= 10; i++) {
    data.push({
        key: i,
        walletAddress: i.toString(),
        heart: '9,1d53,233',
    });
}

export const WalletTable: React.FC = () => {
    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <Table
                columns={columns}
                dataSource={data}
                pagination={{
                    pageSize: 10,
                    showSizeChanger: false,
                    showQuickJumper: true,
                    showTotal: (total, range) =>
                        `${range[0]}-${range[1]} of ${total} items`,
                }}
                rowKey="key"
            />
        </div>
    );
};
