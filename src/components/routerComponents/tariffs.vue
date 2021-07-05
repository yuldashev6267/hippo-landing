<template>
<div>
   <section class="pricing py-4">
  <div class="container">
    <div class="row">
      <!-- Free Tier -->
      <div class="col-lg-4" :id="card1.tariff" v-for="card1 in cards">
        <div class="card mb-5 mb-lg-0">
          <div class="card-body" >
            <h5 class="card-title text-muted text-uppercase text-center"><span style="color:black;font-weight:900">{{card1.tariff}}</span></h5>
            <h6 class="card-price text-center"><span  style="color:#008ecc">{{card1.price}}&nbsp;000</span><span class="period text-center">sum</span></h6>
            <p class="text-center" style="font-size:0.8rem">
            Срок действият:1 месяц</p>
            <hr>
            <ul class="fa-ul">
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Бесконечный Товары</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span><span  class="text-1">продажи </span><span>лимит {{card1.salesLimit}}<br>сверхлимит: {{card1.sLimit}} сум</span> </li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span><span class="text-1">Приходы </span>лимит {{card1.parishesLimit}}<br>сверхлимит {{card1.pLimit}} сум </li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span><span class="text-1">Возвраты </span>Лимит {{card1.refundsLimit}}<br>сверхлимит {{card1.rlimit}} сум</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span><span class="text-1">Перевод </span>Лимит {{card1.transferLimit}}<br>сверхлимит {{card1.tLimit}} сум</li>
<li><span class="fa-li"><i class="fas fa-check"></i></span><span class="text-1">Производство </span>лимит {{card1.productionLimit}}.<br>сверхлимит {{card1.prLimit}} сум 
</li>

<li><span class="fa-li"><i class="fas fa-check"></i></span><span class="text-1">Ревизия </span>лимит {{card1.revisionLimit}}<br> сверхлимит {{card1.reLimit}} сум
</li>
            </ul>
          </div>
        </div>
      </div>
      
     

    </div>
    
  </div>
</section>
</div>
</template>

<script>
import cardData from "../../assets/data/cardData.json"
export default {
    name:"tariffs",
    data(){
      return {
      cards:cardData
      }
    },

}
</script>
<style>

.pricing .card {
  border: none;
  border-radius: 1rem;
  color:#777; 
  cursor:pointer;
  transition: all 0.2s;
  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);
}

.pricing hr {
  margin: 1.5rem 0;
}

.pricing .card-title {
  margin: 0.5rem 0;
  font-size: 0.9rem;
  letter-spacing: .1rem;
  font-weight: bold;
}

.pricing .card-price {
  font-size: 2.8rem;
  margin: 0;
}

.pricing .card-price .period {
  font-size: 1.5rem;
  font-weight: 600;
}
.pricing ul li .text-1 {
font-weight:700;
text-transform:capitalize;
}
.pricing ul li {
  margin-bottom: 0.8rem;
}
.pricing ul li span {
  margin-bottom: -2px;
}
.pricing ul li:hover {
  color:#008ecc;
}
 

.pricing .text-muted {
  color:black;
  opacity: 0.7;
}
.pricing .text-muted:hover {
  opacity: 1;
}
.pricing .btn {
  font-size: 80%;
  border-radius: 5rem;
  letter-spacing: .1rem;
  font-weight: bold;
  padding: 1rem;
  opacity: 0.7;
  transition: all 0.2s;
}

/* Hover Effects on Card */

@media (min-width: 992px) {
  .pricing .card:hover {
    margin-top: -.25rem;
    margin-bottom: .25rem;
    box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.3);
  }
  .pricing .card:hover .btn {
    opacity: 1;
  }
}
</style>

