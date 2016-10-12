/**
 * Created by ivanlazarev on 12.10.16.
 */
export default function (state = null, action) {
    switch (action.type) {
        case 'BOOK_SELECTED' :
            return action.payload;
    }
    return state
}