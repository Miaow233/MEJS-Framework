/**
 * This is the class representation of JSON configuration file
 * <br>
 * 用类来表示的JSON配置文件
 */
export class Config {
  /**
   *
   */
  public master = 0

  /**
   *
   */
  public prefix = '.'

  /**
   *
   */
  public generateMax = 10

  /**
   *
   */
  public timesMax = 100

  /**
   *
   */
  public sidesMax = 1000

  /**
   *
   */
  public skillDefault = 20

  /**
   *
   */
  public rate = 0

  /**
   *
   */
  public extraMax = 5

  /** 6s */
  public static promptDelay = 1000 * 6
}

export default Config
