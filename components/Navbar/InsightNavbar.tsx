"use client";
import React from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "../ui/separator";
import axios from "axios";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

type Props = {};

const InsightNavbar = (props: Props) => {
  const router = useRouter();
  const handleClick = async () => {
    router.push("/listing");
  };
  return (
    <div className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-b border-emerald-400">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <div className="relative w-10 h-10 mr-3">
                <div className="absolute inset-0 bg-emerald-400 rounded-full animate-pulse"></div>
                <svg
                  className="relative z-10 w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
              </div>
              <span className="font-bold text-xl text-white">Hamu TRVs</span>
            </a>
          </div>
          <div>
            <div className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 cursor-pointer text-white px-6 py-2 text-lg rounded-xl transform transition-all duration-300 hover:scale-105"
            onClick={handleClick}
            >
              List a hotel
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsightNavbar;
