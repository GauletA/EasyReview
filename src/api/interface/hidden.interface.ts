
export type TReviewHiddenItem = { word: string; index: number }

export type TReviewPair = {
    first: TReviewHiddenItem[],
    last: TReviewHiddenItem[]
}

export interface IReviewHidden {
    review: TReviewPair[]
};