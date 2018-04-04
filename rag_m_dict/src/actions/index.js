export const SEARCH_ITEM = 'SEARCH_ITEM';

export function searchItem(value) {
    return {
        type: SEARCH_ITEM,
        value: value
    }
}
