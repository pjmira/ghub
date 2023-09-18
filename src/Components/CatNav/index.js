import './_cat-nav.scss';

const CatNav = ()=>{

  return(
    <>
      <div className='cat-nav-container container'>
        <ul>
          <li className='list-items'> <a href='#'> Kids </a> </li>
          <li className='list-items'> <a href='#'> Teens </a> </li>
          <li className='list-items'> <a href='#'> Adults </a> </li>
        </ul>
      </div>
    </>
  )
}

export default CatNav;