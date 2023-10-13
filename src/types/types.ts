export interface IVolumeInfo {
	title: string,
	authors: string[],
	imageLinks: {
		smallThumbnail: string,
		thumbnail: string,
	},
	categories: string[],
	description: string
}

export interface IProduct {
	id: string,
	etag: string,
	volumeInfo: IVolumeInfo,
}
export type CatalogType = {
	catalog: {
		items: IProduct[] | null,
		totalItems: number | null,
	},
}
export type SearchType = {
	options: {
		query: string | null,
		category: string,
		sort: string,
		page: number,
	}
}