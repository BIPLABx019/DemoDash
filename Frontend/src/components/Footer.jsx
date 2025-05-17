import { Typography } from "@material-tailwind/react";
 
export function Footer() {
  return (
    <footer className="w-full h-auto bg-white p-8">
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center text-xl font-normal">
         404 Not Founders
      </Typography>
    </footer>
  );
}