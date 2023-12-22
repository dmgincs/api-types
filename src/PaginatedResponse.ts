/* eslint-disable max-classes-per-file */

class PaginatedMeta {
    /** The number of the current page */
    currentPage: number;

    /** The amount of items on each page */
    itemsPerPage: number;

    /** The total amount of items matching the filters */
    totalItems: number;

    /** The total amount of pages */
    totalPages: number;

    /** The filters applied to the current pagination */
    filter: Record<string, string>;

    /** The search keyword that was applied */
    search?: string;

    /** The columns the search was applied on */
    searchBy?: string[];

    /** The columns to sort by and their sort direction */
    sortBy?: [string, 'ASC' | 'DESC'][];
}

class PaginatedLinks {
    /** Returns the link to the first possible page */
    first?: string;

    /** Returns the previous to the previous page */
    previous?: string;

    /** Returns the link of the current page */
    current: string;

    /** Returns the link to the next page */
    next?: string;

    /** Returns the link to the last page */
    last?: string;
}

export class PaginatedResponseDto<T> {
    data: T[];

    /** Pagination information */
    meta: PaginatedMeta;

    /** Pagination links for easy navigation */
    links: PaginatedLinks;
}
