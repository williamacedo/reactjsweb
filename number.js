
class App extends React.Component {

		  constructor(props) {
		  	super(props);

		  	this.state = {
		  		array: [
		  			{key: 1, name: 'teste', select: false, top: 30, bottom: 0, left: 50, right: 0},
		  			{key: 2, name: 'teste', select: false, top: 80, bottom: 0, left: 50, right: 0}
		  		]
		  	};
		  	this.selectMarcado = this.selectMarcado.bind(this);
		  }

		  selectMarcado(item) {
		  	let data = this.state.array;
			  	for(var i in data){
			  		if(data[i].key == item){
			  			if(data[i].select === true) {
			  				data[i].select = false;
			  			} else {
			  				data[i].select = true;
			  			}
			  			
			  		}
			  	}

		  	this.setState({array: data});
		  }

		  render() {

		    return (
		    	<div>

		    		<div style={{background: "url('https://http2.mlstatic.com/6-tabuleiros-de-xadrez-silicone-D_NQ_NP_817552-MLB25718246975_062017-F.jpg') no-repeat", width: 450, height: 450}}>
						{
							this.state.array.map((item, index) => (
								<div key={index} style={{position: 'absolute', top: item.top, bottom: item.bottom, left: item.left, right: item.right }}>
									{item.select &&
										<p style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>{item.key}</p>
									}	  						
								</div>
							))
						}  			
		    		</div>

		    		<div>
						{
							this.state.array.map((item, index) => (
								<div key={index}>
									<input type="button" value={item.key} style={{backgroundColor: item.select == true ? '#FF0000' : '#00FF00', color: '#fff'}} onClick={() => this.selectMarcado(item.key)} />	  						
								</div>
							))
						}
		    		</div>    		
		    	</div>

		    );
		  }
		}

		ReactDOM.render(<App />, document.getElementById('root'));		