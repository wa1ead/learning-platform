export const Classes = () => {
  return (
    <div className="grid grid-cols-3 my-4 gap-4">
      <div className="card bg-base-100 image-full w-96 shadow-xl">
        <figure>
          <img src="./class.svg" alt="class" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Front-end Web Development</h2>
          <p>
            Front-end web development focuses on designing and building user
            interfaces using HTML, CSS, and JavaScript.
          </p>
          <progress
            className="progress progress-primary w-full"
            value="70"
            max="100"
          ></progress>
          <div className="card-actions justify-end">
            <button className="btn btn-primary mt-2">Continue Learning</button>
          </div>
        </div>
      </div>
      <div className="card bg-base-100 image-full w-96 shadow-xl">
        <figure>
          <img src="./class.svg" alt="class" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Back-end Web Development</h2>
          <p>
            Back-end web development manages server-side logic, databases, and
            authentication.
          </p>
          <progress
            className="progress progress-primary w-full"
            value="40"
            max="100"
          ></progress>
          <div className="card-actions justify-end">
            <button className="btn btn-primary mt-2">Continue Learning</button>
          </div>
        </div>
      </div>
      <div className="card bg-base-100 image-full w-96 shadow-xl">
        <figure>
          <img src="./class.svg" alt="class" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Full-stack Web Development</h2>
          <p>
            Full-stack web development combines both to create complete web
            applications.
          </p>
          <progress
            className="progress progress-primary w-full"
            value="10"
            max="100"
          ></progress>
          <div className="card-actions justify-end">
            <button className="btn btn-primary mt-2">Continue Learning</button>
          </div>
        </div>
      </div>
    </div>
  );
};
