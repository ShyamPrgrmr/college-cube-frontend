import React,{useState} from 'react';
import { Link, useLocation } from 'react-router-dom';

export function PathView() {
  const location = useLocation();

  if(location.pathname === "/"){
    return <> </>
  }
  else{
    return <>
        <div class="u-s-p-y-60 paddingTopBottomZero">
            <div class="section__content">
                <div class="container">
                    <div class="breadcrumb">
                        <div class="breadcrumb__wrap">
                            <ul class="breadcrumb__list">
                                <li class="has-separator">
                                    <Link to="/">Home</Link>
                                </li>
                                
                                <li class="is-marked">
                                    <Link to={location.pathname}>{location.pathname.toUpperCase().slice(1)}</Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    }

}