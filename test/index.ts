import chai from 'chai'
import sinon from 'sinon'
import dotenv from 'dotenv'
import chaiSinon from 'sinon-chai'
import chaiSubset from 'chai-subset'
import chaiString from 'chai-string'

chai.use(chaiSinon)
chai.use(chaiString)
chai.use(chaiSubset)

dotenv.config()

// @ts-ignore
global.sinon = sinon
