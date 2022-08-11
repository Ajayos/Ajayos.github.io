import "./home.css";

const Home = () => {
	return (
		<div class="home">
      <section>
        <h1>AJAY O S </h1>
        <div class="search-tab">
          <form action="https://www.google.com/search?" method="get">
            <input type="text" name="q" placeholder="Search..." className="search" required/>
          </form>
        </div>
    	</section>
    </div>
	);
};

export default Home;


/* $(".btn").click(function(){
        var link = $(".link").val();
        var format =$(".format").children("option:selected").val();
        var src=""+link+"="+format+"";
        download(link,format);     
    });
    function download(link,format){
        $('.button-container').html('<iframe style ="height:50px; border:none;overflow:hidden;" src="https://loader.to/api/button/?url='+ link+'&f='+format+'"><iframe>');
    }
 */