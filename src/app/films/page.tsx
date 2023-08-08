import GenreCard from "@/components/Genre";

export default function Films() {
  
  return (
    
    <div className="mt-10 h-screen">
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 w-3/4 mx-auto'>
        
        <GenreCard title="Short Stories" />


        <GenreCard title="Advertisement"/>
        <GenreCard title="Activism"/>
        <GenreCard title="Genre 4"/>
      </div>
    </div>
  ); 
};