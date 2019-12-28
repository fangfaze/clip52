export default {
    namespage: "main",
    state: { playerName: '阿泽', value: 0, text: '别针', target: '别墅' },
    reducers: {
        change(state: any, action: any) {
            return { ...state, value: action.playload.value, text: action.playload.text }
        },
    }
}
