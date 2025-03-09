"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Category } from "@/types";
import { usePathname } from "next/navigation";
import Link from "next/link";
import LoadingState from "@/components/states/LoadingState";
import NotFoundState from "@/components/states/NotFoundState";
import ErrorState from "@/components/states/ErrorState";

const SideBar = () => {
  const [catList, setCatList] = useState<Category[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const currentCategory = usePathname().slice(1);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const response = await axios.get("/api/categories");
        setCatList(response.data.allCategories);
      } catch (error) {
        console.error("Error fetching categories:", error);
        setError("Failed to load categories.");
        setCatList(null);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading)
    return (
      <div className="sidebar md:p-8 bg-bg-card w-64 min-h-screen hidden md:block ">
        {" "}
        <LoadingState height="h-full" />
      </div>
    );
  if (error) return <ErrorState message={error} />;
  if (!catList || catList.length === 0) return <NotFoundState message="No categories." />;

  return (
    <div className="sidebar md:p-8 bg-bg-card w-64 min-h-screen hidden md:block ">
      <h2 className="text-l font-bold mb-4 text-white pb-2 ">Categories</h2>

      {catList && catList.length > 0 ? (
        <ul className="space-y-2">
          {catList.map((category) => (
            <li
              key={category.id}
              className={`${
                currentCategory === category.id.toString() ? "bg-hover" : null
              } p-2 text-text-secondary hover:bg-hover active:bg-active focus:outline-none focus:ring-1 focus:ring-focus rounded transition-colors cursor-pointer text-sm`}
            >
              <Link href={`/${category.id}?cat=${category.name}`}>
                <span>{category.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-text-muted">No categories found</p>
      )}
    </div>
  );
};

export default SideBar;
