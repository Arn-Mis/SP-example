use wasm_bindgen::prelude::*;
use rand::seq::SliceRandom;

#[wasm_bindgen]
pub fn hello() -> Vec<String> {
    
    let mut names: Vec<String> = ["Arnas", "Lapo", "Lea", "Zeyd", "Daniel"].iter().map(|a| a.to_string()).collect();
    let mut rng = rand::rng();
    names.shuffle(&mut rng);
    names
}
