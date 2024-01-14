import { wordsTab } from "@/mock/hidden.mock";
import { API_CEREBRO } from "@/utils/axios";
import { createQueryKeys } from "@lukemorales/query-key-factory";

// interface IFilterParams {
// 	page: number;
// 	itemsPerPage: number;
// 	name: string;
// 	region: string;
// 	type: string;
// 	status: string;
// }

// interface IShopSimboxFilterParams {
// 	pagination: boolean;
// 	page?: number | null;
// 	itemsPerPage?: number;
// }

export const cerebrolearnHiddenQueryKeys = createQueryKeys('cerebro_learnHidden', {
	all: () => {
		const url = API_CEREBRO.learnHidden;

		return {
			queryKey: [''],
			queryFn: (): Promise<any> =>
            new Promise((resolve) => {
                  resolve(wordsTab);
              })
		};
	},
});