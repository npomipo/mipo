import styles from '@/styles/components/sections/new-course/SignUpProgram.module.sass'
import urlPointer from '@/public/assets/imgs/new-course/pointer.png'
import { ImgTemplate } from '@/components/imgs'
import data from '@/data/mock/new-course/data.json'
import CardListProgram from '@/components/cards/CardListProgram'
import CardPriceNew from '@/components/cards/CardPriceNew'
import CardSmartCourse from '@/components/cards/CardSmartCourse'
import CardProCourse from '@/components/cards/CardProCourse'

const list = [
  {
    title: 'Готовые знания + Официальный документ',
    subTitle: 'Смотрите лекции, выполняйте практические задания, получайте официальные документы по завершению курса в НАНО МИПО'
  },
  {
    title: 'Сэкономьте 13%',
    subTitle: 'Получите налоговый вычет.Все подробности у менеджера при записи на курс'
  },
  {
    title: 'Остались вопросы?',
    subTitle: 'Позвоните или напишите нам: +7 (495) 150-99-24'
  }
]

const SignUpProgram = () => {
  const variant = data.trainingProgram.map((item) =>item.pro).includes(true)
  console.log(variant)
  return (
    <section className={styles.signUpProgram}>
      <div className={'container'}>
        <h2 className={styles.header}>Запишитесь на программу</h2>

        <div className={styles.cardsBlock}
             style={{
               justifyContent: variant? 'space-between' : 'center'
             }}
        >
          {
            variant ?
              <>
                <CardSmartCourse />
                <CardProCourse />
              </>
              :
              <>
                <CardPriceNew />
                <CardListProgram />
              </>
          }
        </div>

        <ul className={styles.listProgram}>
          {
            list.map((item, index) => (
              <li key={index}>
                <ImgTemplate src={urlPointer} alt={'img'} width={24} height={21} />

                <h2>{item.title}</h2>

                <p>{item.subTitle}</p>
              </li>
            ))
          }
        </ul>
      </div>
    </section>
  )
}

export default SignUpProgram
