export default function EduAndExp() {
  return (
    <section className="flex gap-4">
      <div className="flex-1">
        <h1 className="section-header">Education</h1>
        <div className="my-8 flex flex-col gap-2">
          <div className="flex gap-12 ml-5">
            <div className="w-0.5 bg-dash [--line-color:#374151] mt-8 relative">
              <div className="absolute top-0 left-px w-8 h-8 -translate-x-1/2 -translate-y-full rounded-full border-2 border-dashed border-gray-700 after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:bg-yellow-400 after:w-4 after:h-4" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <h1 className="section-header">Experience</h1>
      </div>
    </section>
  );
}
