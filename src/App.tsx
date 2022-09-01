//import { FC, PropsWithChildren, useState } from 'react';
import React from 'react';
import {Outlet, Route, Routes } from 'react-router-dom';

function App() {
  return (
  <>
    <Routes>
     <Route path="/" element={<div>hello test</div>}></Route>
        <Route
           path="conversations"
            element={
              <div>
                <div>conversations</div>
                <Outlet />
              </div>
            }
        >
           <Route path=":id" element={<div>Conversaiton ID Page</div>} />
        </Route>
     </Routes>
   </>
  );
}