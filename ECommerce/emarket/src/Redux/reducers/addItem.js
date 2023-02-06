/* eslint-disable no-unreachable */
const addItem = [];

const addItems = (state = addItem, action) => {
    const product = action.payload;
    switch (action.type) {
        case "ADDITEM":
            const exist = state.find((x) => x.id === product.id);
            if (exist) {
                return state.map((x) =>
                    x.id === product.id ? { ...x, qty: x.qty + 1 } : x
                );
            }
            else {
                const product = action.payload;
                return [
                    ...state,
                    {
                        ...product,
                        qty: 0
                    }
                ]

            }
            break;
        // return [
        //     ...state,
        //     action.payload
        // ]
        // break;

        // 


        case "DELITEM":
            // return state=state.filter((x)=>{
            //     return x.id!==action.payload.id
            // })

            const exist1 = state.find((x) => x.id === product.id);
            if (exist1.qty === 1) {
                return state.filter((x) => x.id !== exist1.payload.id)
            }
            else {
                return state.map((x) =>
                    x.id === product.id ? { ...x, qty: x.qty - 1 } : x
                )
            }
            break;



        default:
            return state;
            break;
    }
}


export default addItems;