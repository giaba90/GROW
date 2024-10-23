export interface Category {
    termTaxonomyId: number;
    name: string;
    slug: string;
}

export interface CategoriesResponse {
    nodes: Category[];
}
