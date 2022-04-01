export const createPromiseThunk = (type, promiseCreator) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  return (param) => async (dispatch) => {
    dispatch({ type, param });
    try {
      const payload = await promiseCreator(param);
      dispatch({ type: SUCCESS, payload });
    } catch (e) {
      dispatch({ type: ERROR, payload: e, error: true });
    }
  };
};

// 리듀서에서 사용할 유틸 함수
export const reducerUtils = {
  // 초기 상태
  initial: (initialData = null) => ({
    loading: false,
    data: initialData,
    error: null,
  }),
  // 로딩 중
  loading: (prevState = null) => ({
    loading: true,
    data: prevState,
    error: null,
  }),
  // 성공
  success: (payload) => ({
    loading: false,
    data: payload,
    error: null,
  }),
  // 실패
  error: (error) => ({
    loading: false,
    data: null,
    error: error,
  }),
};
