const constant = {
    page: {
      defaultNumber: 1,
      size: 10,
      defaultTotal: 0,
      maxSize: 200,
      defaultCurrentPaginationNumber: 1,
    },
    timer: {
      defaultSearchTimer: 500,
    },
    defaultPaginationOption: [
      { label: 10, id: 10 },
      { label: 25, id: 25 },
      { label: 50, id: 50 },
      { label: 100, id: 100 },
    ],
    APIResponse: {
      defaultStatusCode: 200,
      errorStatusCode: 401,
    },
    defaultUserId: 0,
  };
  
  export default constant;