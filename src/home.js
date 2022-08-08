import "./home.css";

const Home = () => {
	return (
		<div class="main">
        	<section>
        		<h1>AJAY O S</h1>
				
            <div class="search-tab">
              <form action="/search?" method="get">
                <div className="search_one"/>
                <div className="search_two"/>
					      <input type="text" class="search" name="data" placeholder="enter your link" required></input>
                <div className="search__icon" />
                <div className="Microphone__icon" />
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