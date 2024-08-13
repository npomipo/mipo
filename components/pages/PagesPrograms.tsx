import {
  HeroPrograms,
  FilterSearch,
  Programs,
  ContactForm
} from '@/components/sections'
import { TypeCategory } from '@/types/index'
import Script from 'next/script'

type PagesProgramsType = {
  ofType?: TypeCategory
}

const PagesPrograms = ({ ofType }: PagesProgramsType) => {
  return (
    <>
      <Script id="xcntmyAsync" type="text/javascript" dangerouslySetInnerHTML={{__html: `
          (function(d){
          var xscr = d.createElement( 'script' ); 
          xscr.async = 1; 
          xscr.src = '//x.cnt.my/async/track/?r=' + Math.random(); 
          var x= d.getElementById( 'xcntmyAsync' ); 
          x.parentNode.insertBefore( xscr, x );
          })(document);
        `}}
      />
      <HeroPrograms ofType={ofType} />
      <FilterSearch ofType={ofType} />
      <Programs ofType={ofType} withQty threerow withFilters />
      <ContactForm />
    </>
  )
}

export default PagesPrograms
