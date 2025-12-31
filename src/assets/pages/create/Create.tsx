import { useState } from "react";

const Create = () => {

  const [title,  setTitle] = useState("");
  const [body, setBody] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>){
    event.preventDefault();

    if(!title.trim() || !body.trim()){
      alert("Please fill in both title and body");
      return;
    }

    try{
      const response = await fetch(`http://localhost:8080/add`,{
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({title,body})
      });

      if(!response.ok) throw new Error("Failed to create a note");

      alert("Note created successfully!");
      setTitle("");
      setBody("");

    }catch(e){
      console.log(e);
    }

  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-8">Create New Note</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title Field */}
          <div>
            <label
              htmlFor="title"
              className="block text-lg font-medium text-black mb-2"
            >
              Title
            </label>
            <input
              id="title"
              type="text"
              // value={title}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              // onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter note title..."
              className="
                w-full px-4 py-3 
                border border-gray-500 
                rounded-lg 
                focus:outline-none 
                focus:ring-1 focus:ring-black 
                focus:border-black 
                bg-white 
                text-black 
                placeholder-gray-500
              "
            />
          </div>

          {/* Body Field (Textarea) */}
          <div>
            <label
              htmlFor="body"
              className="block text-lg font-medium text-black mb-2"
            >
              Note Content
            </label>
            <textarea
              id="body"
              value={body}
              // onChange={(e) => setBody(e.target.value)}
              onChange={(e) => setBody(e.target.value)}
              placeholder="Write your note here..."
              rows={10}
              className="
                w-full px-4 py-3 
                border border-gray-500 
                rounded-lg 
                focus:outline-none 
                focus:ring-1 focus:ring-black 
                focus:border-black 
                bg-white 
                text-black 
                placeholder-gray-500
                resize-y
              "
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="
                w-full sm:w-auto 
                px-8 py-3 
                bg-black 
                text-white 
                font-medium 
                rounded-lg 
                hover:bg-gray-800 
                transition-colors 
                focus:outline-none 
                focus:ring-2 
                focus:ring-black 
                focus:ring-offset-2
              "
            >
              Create Note
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
