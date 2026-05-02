import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <main className="min-h-screen bg-base-100 flex items-center justify-center px-6">
      <section className="max-w-5xl w-full grid lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-6 text-center lg:text-left">
          <p className="inline-flex items-center rounded-full border border-base-300 px-4 py-1 text-sm font-bold  text-base-content/70">
            404 • Page Not Found
          </p>

          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
              Oops! This page
              <span className="block text-primary">melted in the sun ☀️</span>
            </h1>

            <p className="text-base md:text-lg text-base-content/70 max-w-xl mx-auto lg:mx-0">
              The page you’re looking for might have been moved, removed, or
              never existed. Don’t worry — let’s get you back to something cool
              and useful.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button className="font-bold">
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="relative w-full max-w-md aspect-square rounded-[2rem] bg-linear-to-br from-primary/10 via-secondary/10 to-accent/10 border border-base-300 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-3">
                <div className="text-8xl md:text-9xl font-black text-primary drop-shadow-sm">
                  404
                </div>
                <p className="text-base-content/60 text-sm md:text-base px-6">
                  Lost in the summer collection.
                </p>
              </div>
            </div>

            <div className="absolute top-8 left-8 w-16 h-16 rounded-full bg-warning/30 blur-2xl" />
            <div className="absolute bottom-10 right-10 w-24 h-24 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute top-1/3 right-12 text-4xl animate-bounce">
              🕶️
            </div>
            <div className="absolute bottom-1/4 left-10 text-4xl animate-pulse">
              🌴
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default NotFoundPage;
