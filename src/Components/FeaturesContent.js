import React from "react";

import history from "../Assets/History.png"
import offers from "../Assets/Offers.png"
import rating from "../Assets/Rating.png"
import choose1 from "../Assets/Choose1.png"
import choose2 from "../Assets/Choose2.png"
const FeaturesContent = () => {
  return (
    <div class="bg-light py-5 service-3">
    <div class="container">
    
        <div class="row">
   
            <div class="col-md-7 wrap-service3-box">
                <div class="card border-0 card-shadow mb-4">
                    <div class="card-body d-flex">
                        <div class="my-3 mr-4 align-self-center display-2 "><img src={offers} alt="photo" Style="width:29px; height:29px; "></img></div>
                        <div class="align-self-center">
                            <h6 class="font-weight-medium"><a href="javascript:void(0)" class="linking">Offers</a></h6>
                            <p class="mt-3">You can relay on our amazing features list and also our customer services will be great experience.</p>
                        </div>
                    </div>
                </div>
            </div>
     
            <div class="col-md-6 wrap-service3-box">
                <div class="card border-0 card-shadow mb-4">
                    <div class="card-body d-flex">
                        <div class="my-3 mr-4 align-self-center display-2 "><img src={choose1} alt="photo" Style="width:29px; height:29px; "></img></div>
                        <div class="align-self-center">
                            <h6 class="font-weight-medium"><a href="javascript:void(0)" class="linking">Options</a></h6>
                            <p class="mt-3">You can relay on our amazing features list and also our customer services will be great experience.</p>
                        </div>
                    </div>
                </div>
            </div>
 
            <div class="col-md-6 wrap-service3-box">
                <div class="card border-0 card-shadow mb-4">
                    <div class="card-body d-flex">
                    <div class="my-3 mr-4 align-self-center display-2 "><img src={history} alt="photo" Style="width:29px; height:29px; "></img></div>
                        <div class="align-self-center">
                            <h6 class="font-weight-medium"><a href="javascript:void(0)" class="linking">History</a></h6>
                            <p class="mt-3">You can relay on our amazing features list and also our customer services will be great experience.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-6 wrap-service3-box">
                <div class="card border-0 card-shadow mb-4">
                    <div class="card-body d-flex">
                    <div class="my-3 mr-4 align-self-center display-2 "><img src={rating} alt="photo" Style="width:29px; height:29px; "></img></div>
                        <div class="align-self-center">
                            <h6 class="font-weight-medium"><a href="javascript:void(0)" class="linking">Rating</a></h6>
                            <p class="mt-3">You can relay on our amazing features list and also our customer services will be great experience.</p>
                        </div>
                    </div>
                </div>
            </div>
		
        </div>
    </div>
    
</div>

  );
};

export default FeaturesContent;
