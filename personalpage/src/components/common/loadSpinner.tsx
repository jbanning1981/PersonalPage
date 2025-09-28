const LoadSpinner = () => {
    return (
        <div className="d-flex justify-content-center w-100">
        <div className="d-flex align-items-middle">
          <div className="align-self-center pt-neg10">
            <div className="d-flex align-self-center">
              <div className="border rounded-circle outer-spin">
                <div className="border rounded-circle middle-spin spinner indigo-border-pulse">
                  <div className="p-1">
                    <div className="border rounded-circle inner-spin">
                      <div className="p-1">
                        <div className="border rounded-circle core">
                          <div className="p-1"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex align-items-middle">
              <div className="align-self-center justify-content-center pt-4 flex-grow-1">
                <p className="lh-1 fs-3 text-center">Loading...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default LoadSpinner;