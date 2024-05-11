import Link from "next/link";

const Not_Found = () => {
  return (
    <div>
      <h2>Not Found</h2>
      <p>The page you are looking for is not exist!</p>
      <Link href="/">Return to Home</Link>
    </div>
  );
};

export default Not_Found;
