export const StudentDetails = () => {
  return (
    <div className="w-full p-2">
      <div className="card card-side bg-violet-900 shadow-xl">
        <figure>
          <img src="./software.svg" alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title justify-center">Hi WALID!</h2>
          <p>Welcome to your dashboard</p>
          <div>
            <form className="flex flex-col gap-2">
              <div>
                <label className="label">Name</label>
                <div className="flex gap-4">
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered input-secondary  w-full max-w-xs"
                    value="WALID"
                    disabled
                  />
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered input-secondary  w-full max-w-xs"
                    value="BEN SALAH"
                    disabled
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label className="label">Email</label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-secondary w-full max-w-sm"
                  value="waliddraa2@gmail.com"
                  disabled
                />
              </div>
              <div className="flex flex-col">
                <label className="label">Badge</label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-secondary w-full max-w-xs"
                  value="Student"
                  disabled
                />
              </div>
            </form>
          </div>
          <div>
            <p>Profile completion</p>
            <div
              className="radial-progress bg-primary text-primary-content border-primary border-4"
              style={{ "--value": 70 }}
              role="progressbar"
            >
              70%
            </div>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Profile</button>
          </div>
        </div>
      </div>
    </div>
  );
};
