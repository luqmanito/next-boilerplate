import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <div className="container">
        <div className="row bg-dark">
          <div className="col">
            <button className="btn btn-primary m-3">Button Primary</button>
          </div>
        </div>
      </div>
    </>
  );
}
