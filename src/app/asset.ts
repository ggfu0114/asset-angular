export interface Asset {
    Aid: number;
    AssetType: string;
    Code: string;
    Label: string;
    Market: string;
    Value: number;
}
export interface AssetCategory {
    type: string;
    value: number;
    ratio: number;
}