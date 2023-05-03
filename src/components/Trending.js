import { Card, Container, Row, Col, Image } from "react-bootstrap"
import duneImage from "../assets/images/trending/dune.jpg"
import everythingImage from "../assets/images/trending/everything.jpg"
import infiniteImage from "../assets/images/trending/infinite.jpg"
import jokerImage from "../assets/images/trending/joker.jpg"
import lightyearImage from "../assets/images/trending/lightyear.jpg"
import morbiusImage from "../assets/images/trending/morbius.jpg"

const Trending = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white">TRENDING MOVIES</h1>
        <br />
        <Row>
          <Col md={4} className="movieWrapper" id="trending">
            <Card className="movieImage">
              <Image src={duneImage} alt="Dune Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">DUNE</Card.Title>
                  <Card.Text className="text-left">
                  It is the first part of a two-part adaptation of the 1965 novel by Frank Herbert. 
                  Set in the distant future, Dune follows Paul Atreides as his family, the noble House Atreides, is thrust into a war for the deadly and inhospitable desert planet Arrakis.
                  tentang kehidupan manusia di masa depan
                  </Card.Text>
                  <Card.Text className="text-left">
                  Terakhir diperbarui 3 menit yang lalu
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image
                src={everythingImage}
                alt="Dune Movies"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">
                    EVERYTHING EVERWHERE
                  </Card.Title>
                  <Card.Text className="text-left">
                  The story follows 18-year-old Madeline Whittier, a half-Japanese, half-African-American who is being treated by her doctor mother for severe combined immunodeficiency (SCID), and therefore is not allowed to leave her house or interact with anything that has not been "sanitized"
                  </Card.Text>
                  <Card.Text className="text-left">
                  Terakhir diperbarui 3 menit yang lalu
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={infiniteImage} alt="Dune Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">INFINITE</Card.Title>
                  <Card.Text className="text-left">
                  As an experienced climber (Naomi Watts) ascends Mt.
                   Washington, she turns back before she reaches the summit as a huge blizzard approaches.
                   But on her way down, she encounters a lone, stranded man,
                   and takes it upon herself to get them both down the mountain before nightfall arrives
                  </Card.Text>
                  <Card.Text className="text-left">
                  Terakhir diperbarui 3 menit yang lalu
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={jokerImage} alt="Dune Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">JOKER</Card.Title>
                  <Card.Text className="text-left">
                  deskripsi tentang film tersebut ( isi )
                  </Card.Text>
                  <Card.Text className="text-left">
                  Terakhir diperbarui 3 menit yang lalu
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image
                src={lightyearImage}
                alt="Dune Movies"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">LIGHT YEAR</Card.Title>
                  <Card.Text className="text-left">
                  deskripsi tentang film tersebut ( isi )
                  </Card.Text>
                  <Card.Text className="text-left">
                  Terakhir diperbarui 3 menit yang lalu
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={morbiusImage} alt="Dune Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">MORBIUS</Card.Title>
                  <Card.Text className="text-left">
                  deskripsi tentang film tersebut ( isi )
                  </Card.Text>
                  <Card.Text className="text-left">
                  Terakhir diperbarui 3 menit yang lalu
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Trending
