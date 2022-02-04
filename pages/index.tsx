import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import { PokemonTCG } from 'pokemon-tcg-sdk-typescript';
import { useState } from 'react';
import favICON from '../assets/favicon.png';
import { Card } from '../components/card';
import { Filter } from '../components/filter';
import { Header } from '../components/header';
import { CardContext } from '../context/CardContext';

export const getServerSideProps: GetServerSideProps = async (context) => {
  //prefetch cards data on serverside and render
  const cards = await PokemonTCG.findCardsByQueries({ page: 1, pageSize: 12 });
  const sets = await (await PokemonTCG.getAllSets()).map((value) => value.name);
  const types = await PokemonTCG.getTypes();
  const rarities = await PokemonTCG.getRarities();
  return { props: { cards, sets, types, rarities } };
};

interface HomeProps {
  cards: PokemonTCG.Card[];
  sets: string[];
  types: PokemonTCG.Type[];
  rarities: PokemonTCG.Rarity[];
}

const Home: NextPage<HomeProps> = ({ cards: data, sets, types, rarities }) => {
  const [cards, setCards] = useState(data);
  const [filterdCard, setFilterdCard] = useState(data);

  function setFilteredValue(values: PokemonTCG.Card[]) {
    setFilterdCard(values);
  }
  return (
    <>
      <Head>
        <title>TCG Marketplace</title>
        <link rel="icon" type="image/png" href={favICON.src}></link>
      </Head>
      <Header />

      <CardContext.Provider
        value={{
          intialValue: cards,
          filteredValue: filterdCard,
          setFilteredValue: setFilteredValue,
        }}
      >
        <Filter sets={sets} rarities={rarities} types={types} />
        {filterdCard.map((card, i) => (
          <Card card={card} key={i} />
        ))}
      </CardContext.Provider>
    </>
  );
};

export default Home;
