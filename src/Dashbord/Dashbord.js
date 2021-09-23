import React, { Component } from "react";

export default class Dashbord extends Component {
  render() {
    return (
      <div class="auth-wrapper">
        <div class="auth-content">
          <div class="card">
            <div class="card-body text-center">
              
              <h3 class="mb-4">Dashbord</h3>
              <section class="search-and-user">
                  <form>
                    <input type="search" placeholder="Search Pages..."/>
                    <button type="submit" aria-label="submit form" class="feather icon-search ">                
                    </button>
                  </form>
                  
              </section>
              <section class="grid">
                <article>1</article>
                <article>2</article>
                <article>3</article>
                <article>4</article>
                <article>5</article>
                <article>6</article>
                <article>7</article>
                <article>8</article>
                <input class="PrivateSwitchBase-input-1895" name="agreement" type="checkbox" data-indeterminate="false" value="" checked=""></input>
              </section>

             
            </div>
          </div>
        </div>
      </div>
    );
  }
}
