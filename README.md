# Skozy

## Installation

* Install docker

* Build images (first time)

```
  ./project -b
```

* Run images and create network so it can see each others

```
  ./project -r -n
```

* Checks that everything went fine by calling healthchecks

```
  curl -XGET 'localhost:8080/healthchecks/{rexster,es}'
```





