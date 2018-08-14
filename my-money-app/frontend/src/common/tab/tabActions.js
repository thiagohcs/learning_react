

export function selectTab(tabId) {
    return {
        type: 'TAB_SELECTED',
        playload: tabId
    }
}