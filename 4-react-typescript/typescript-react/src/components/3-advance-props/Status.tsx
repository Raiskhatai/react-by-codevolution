type prop = {
  status: "sucess" | "failed" | "error";
};

const Status = ({ status }: prop) => {
  console.log(status);
  return (
    <div>
      {status == "sucess"
        ? "we make it"
        : status == "failed"
          ? "server failed"
          : "we get error"}
    </div>
  );
};

export default Status;
