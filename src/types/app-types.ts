import type { ContentfulStatusCode } from "hono/utils/http-status";

export interface IResp {
  status: ContentfulStatusCode;
  success: boolean;
  message: string;
}
export interface PaginationInfo{
  total_records:number;
    curent_page:number;
    page_size:number;
    totalPages:number;
    next_page: number|null;
    prev_page: number | null;

}

export type PaginatedResp<T extends unknown> = {
  pagination_info: PaginationInfo,
  records: T[];
};

export interface IRespWithData<T = unknown> extends IResp {
  data: T;
}

