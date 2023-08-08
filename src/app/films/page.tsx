import GenreCard from "@/components/Genre";

export default function Films() {
  
  return (
    
    <div className="mt-10 h-screen">
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 w-3/4 mx-auto'>
        
        <GenreCard title="Promotional" bgImg='/assets/images/zipcar.jpg' />


        <GenreCard title="Interviews" bgImg='/assets/images/interview.jpg' />
        <GenreCard title="Short Films" bgImg='/assets/images/sf.png'/>
        <GenreCard title="Acting" bgImg='/assets/images/sf.png'/>
      </div>
    </div>
  ); 
};