export default function makeDefaultState (servicePath, options) {
  const { idField, autoRemove, paginate, enableEvents, addOnUpsert, skipRequestIfExists, preferUpdate, replaceItems } = options
  const state = {
    ids: [],
    keyedById: {},
    copiesById: {},
    currentId: null,
    copy: null,
    idField,
    servicePath,
    autoRemove,
    enableEvents,
    addOnUpsert,
    skipRequestIfExists,
    preferUpdate,
    replaceItems,

    isFindPending: false,
    isGetPending: false,
    isCreatePending: false,
    isUpdatePending: false,
    isPatchPending: false,
    isRemovePending: false,

    errorOnFind: null,
    errorOnGet: null,
    errorOnCreate: null,
    errorOnUpdate: null,
    errorOnPatch: null,
    errorOnRemove: null
  }
  if (paginate) {
    state.pagination = {}
  }
  return state
}
