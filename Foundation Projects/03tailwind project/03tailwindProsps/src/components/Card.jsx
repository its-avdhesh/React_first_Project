import React from 'react'

export default function Card({userName, Location="Indore"}) {
  console.log("props", userName);
  return (
    <div>
      <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img
          className="w-24 h-24 rounded-full mx-auto"
          src="https://plus.unsplash.com/premium_photo-1730055194055-2ecec719fa5b?q=80&w=1686&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Sarah Dayan"
          width="384"
          height="512"
        />
        <div className="pt-6 space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              “Tailwind CSS is the only framework that I've seen scale
              on large teams. It’s easy to customize, adapts to any design,
              and the build size is tiny.”
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">
              {userName}
            </div>
            <div>{ Location}, Algolia</div>
          </figcaption>
        </div>
      </figure>
    </div>
  )
}
