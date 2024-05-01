import { ethers } from "ethers"
import "./Main.css";
const Main = ({ state }) => {

  const buyContribute = async (event) => {
    event.preventDefault();
    const { contract } = state;
    const name = document.querySelector("#name").value;
    const message = document.querySelector("#message").value;
    //const amount = document.querySelector("#amount").value;
    const amount = { value: ethers.utils.parseEther("0.001") }
    const transaction = await contract.buyContribute(name, message, amount)
    await transaction.wait();
    alert("Transaction is successul");
    window.location.reload();
  }
  return (

    <>


      <div className="login-root">
        <div className="box-root flex-flex flex-direction--column" style={{ minHeight: '100vh', flexGrow: 1 }}>
          <div className="loginbackground box-background--white padding-top--64">
            <div className="loginbackground-gridContainer">
              <div className="box-root flex-flex" style={{ gridArea: 'top / start / 8 / end' }}>
                <div className="box-root" style={{ backgroundImage: 'linear-gradient(white 0%, rgb(247, 250, 252) 33%)', flexGrow: 1 }}>
                </div>
              </div>
              <div className="box-root flex-flex" style={{ gridArea: '4 / 2 / auto / 5' }}>
                <div className="box-root box-divider--light-all-2 animationLeftRight tans3s" style={{ flexGrow: 1 }} />
              </div>
              <div className="box-root flex-flex" style={{ gridArea: '6 / start / auto / 2' }}>
                <div className="box-root box-background--blue800" style={{ flexGrow: 1 }} />
              </div>
              <div className="box-root flex-flex" style={{ gridArea: '7 / start / auto / 4' }}>
                <div className="box-root box-background--blue animationLeftRight" style={{ flexGrow: 1 }} />
              </div>
              <div className="box-root flex-flex" style={{ gridArea: '8 / 4 / auto / 6' }}>
                <div className="box-root box-background--gray100 animationLeftRight tans3s" style={{ flexGrow: 1 }} />
              </div>
              <div className="box-root flex-flex" style={{ gridArea: '2 / 15 / auto / end' }}>
                <div className="box-root box-background--cyan200 animationRightLeft tans4s" style={{ flexGrow: 1 }} />
              </div>
              <div className="box-root flex-flex" style={{ gridArea: '3 / 14 / auto / end' }}>
                <div className="box-root box-background--blue animationRightLeft" style={{ flexGrow: 1 }} />
              </div>
              <div className="box-root flex-flex" style={{ gridArea: '4 / 17 / auto / 20' }}>
                <div className="box-root box-background--gray100 animationRightLeft tans4s" style={{ flexGrow: 1 }} />
              </div>
              <div className="box-root flex-flex" style={{ gridArea: '5 / 14 / auto / 17' }}>
                <div className="box-root box-divider--light-all-2 animationRightLeft tans3s" style={{ flexGrow: 1 }} />
              </div>
            </div>
          </div>
          <div className="box-root padding-top--24 flex-flex flex-direction--column" style={{ flexGrow: 1, zIndex: 9 }}>
            <div className="box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center">
              <h1><a  rel="dofollow">University Of East London</a></h1>
            </div>
            <div className="formbg-outer">
              <div className="formbg">
                <div className="formbg-inner padding-horizontal--48">
                  <span style={{textAlign:"center"}} className="padding-bottom--15">Contribute for Good🥳</span>


                  <form onSubmit={buyContribute}>
                    <div className="field padding-bottom--24">
                      <span>Your Name</span>
                      <input type="text" required="required" id="name" />
                    </div>
                    <div className="field padding-bottom--24">
                      <span>Your Message</span>
                      <input type="text" required="required" id="message" />
                    </div>
                    <div className="field padding-bottom--24">
                      <input type="submit" value="Pay" disabled={!state.contract} />
                    </div>
                  </form>



                </div>
              </div>

            </div>
          </div>
        </div>
      </div>














    </>
  );
}
export default Main;