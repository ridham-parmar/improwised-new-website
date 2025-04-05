import azure from "$lib/images/technologies/azure.svg"
import redis from "$lib/images/technologies/redis.svg"
import linux from "$lib/images/technologies/linux.svg"

import kubernetes from "$lib/images/technologies/kubernetes.svg"
import circlci from "$lib/images/technologies/circle_ci.svg"
import terraform from "$lib/images/technologies/terraform.svg"
import postgres from "$lib/images/technologies/psotgres.svg"
import github from "$lib/images/technologies/github.svg"
import python from "$lib/images/technologies/python.svg"
import go from "$lib/images/technologies/go.svg"
import docker from "$lib/images/technologies/docker.svg"
import grafana from "$lib/images/technologies/grafana.svg"
import gcp from "$lib/images/technologies/gcp.svg"
import prometheus from "$lib/images/technologies/prometheus.svg"
import helm from "$lib/images/technologies/helm.svg"
import mysql from "$lib/images/technologies/mysql.svg"
import gitlab from "$lib/images/technologies/gitlab.svg"
import keycloak from "$lib/images/technologies/keycloak.svg"
import vault from "$lib/images/technologies/vault.svg"
import kratos from "$lib/images/technologies/kratos.svg"
import loki from "$lib/images/technologies/loki.svg"
import robusta from "$lib/images/technologies/robusta.svg"
import alertManager from "$lib/images/technologies/alert-manager.svg"
import concourse from "$lib/images/technologies/concourse.svg"
import kafka from "$lib/images/technologies/kafka.svg"
import digitalOcean from "$lib/images/technologies/digital-ocean.svg"
import pulsar from "$lib/images/technologies/pulsar.svg" 

import react from "$lib/images/technologies/react.svg"
import vue from "$lib/images/technologies/vue.svg"
import aws from "$lib/images/technologies/aws.svg"
import angular from "$lib/images/technologies/angular.svg"
import dexidp from "$lib/images/technologies/dexidp.svg"
import argo from "$lib/images/technologies/argocd.svg"
import node from "$lib/images/technologies/node.svg"
import bootstrap from "$lib/images/technologies/bootstrap.svg"
import js from "$lib/images/technologies/js.svg"
import laravel from "$lib/images/technologies/laravel.svg"

// import pulsar from "$lib/images/technologies/pulsar-apache.svg"
import rabbitmq from "$lib/images/technologies/rabbitmq.svg"
import uptimekuma from "$lib/images/technologies/uptime-kuma.svg"
import forgejo from "$lib/images/technologies/forgejo.svg"
import traefik from "$lib/images/technologies/Traefik.svg"
import emqx from "$lib/images/technologies/emqx.svg"
import apache from "$lib/images/technologies/Apache.svg"
import authentik from "$lib/images/technologies/authentik.svg"
import drone from "$lib/images/technologies/dron.svg"
import fleetcd from "$lib/images/technologies/Fleetcd.svg"
import fluxcd from "$lib/images/technologies/fluxcd.svg"
import puppet from "$lib/images/technologies/puppet.svg"
import progresschef from "$lib/images/technologies/Progress-Chef.svg"

export const level1 = [
    { name: "Prometheus", url: prometheus, alt: "Prometheus monitoring tool logo", link: "https://prometheus.io/" },
    { name: "AWS", url: aws, alt: "Amazon Web Services Logo", link: "https://aws.amazon.com/getting-started/?nc2=h_ls" },
    { name: "GCP", url: gcp, alt: "Google Cloud Platform Logo", link: "https://cloud.google.com" },
    { name: "Bootstrap", url: bootstrap, alt: "Bootstrap CSS framework logo", link: "https://getbootstrap.com/" },
]

export const level2 = [
    { name: "Github", url: github, alt: "GitHub source code hosting logo", link: "https://github.com/" },
    { name: "Grafana", url: grafana, alt: "Grafana observability platform logo", link: "https://grafana.com/" },
    { name: "Docker", url: docker, alt: "Docker containerization platform logo", link: "https://www.docker.com/" },
    { name: "Helm", url: helm, alt: "Helm Kubernetes package manager logo", link: "https://helm.sh/" },
    { name: "Golang", url: go, alt: "Golang programming language logo", link: "https://go.dev/" },
    { name: "Kubernetes", url: kubernetes, alt: "Kubernetes container orchestration logo", link: "https://kubernetes.io/" },
    { name: "Redis", url: redis, alt: "Redis in-memory database logo", link: "https://redis.io/" }
]

export const level3 = [
    { name: "Postgres", url: postgres, alt: "PostgreSQL relational database logo", link: "https://www.postgresql.org/" },
    { name: "Laravel", url: laravel, alt: "Laravel PHP framework logo", link: "https://laravel.com/" },
    { name: "Terraform", url: terraform, alt: "Terraform infrastructure as code logo", link: "https://www.terraform.io/" },
    { name: "Flux CD", url: fluxcd, alt: "Flux CD GitOps automation tool logo", link: "https://fluxcd.io/" },
    { name: "GitLab", url: gitlab, alt: "GitLab DevOps platform logo", link: "https://about.gitlab.com/" },
    { name: "Forgejo", url: forgejo, alt: "Forgejo self-hosted Git service logo", link: "https://forgejo.org/" },
    { name: "Keycloak", url: keycloak, alt: "Keycloak identity and access management logo", link: "https://www.keycloak.org/" },
    { name: "Vue", url: vue, alt: "Vue.js frontend JavaScript framework logo", link: "https://vuejs.org/" },
    { name: "Vault", url: vault, alt: "HashiCorp Vault secrets management logo", link: "https://www.hashicorp.com" },
    { name: "Kratos", url: kratos, alt: "Ory Kratos identity management logo", link: "https://www.ory.sh/kratos/" },
    { name: "MySQL", url: mysql, alt: "MySQL relational database management system logo", link: "https://www.mysql.com/" },
    { name: "Dexidp", url: dexidp, alt: "Dex IDP identity provider logo", link: "https://dexidp.io/" },
    { name: "Drone CI", url: drone, alt: "Drone CI continuous integration logo", link: "https://www.drone.io/" },
    { name: "ArgoCD", url: argo, alt: "ArgoCD Kubernetes continuous deployment logo", link: "https://argoproj.github.io/cd/" },
    { name: "Authentik", url: authentik, alt: "Authentik open-source identity provider logo", link: "https://github.com/goauthentik/authentik" },
    { name: "EMQX", url: emqx, alt: "EMQX MQTT broker for IoT logo", link: "https://www.emqx.io/" },
    { name: "Bootstrap", url: bootstrap, alt: "Bootstrap responsive CSS framework logo", link: "https://getbootstrap.com/" }
]

export const level4 = [
    { name: "Loki", url: loki, alt: "Grafana Loki log aggregation system logo", link: "https://grafana.com/oss/loki/" },
    { name: "Robusta", url: robusta, alt: "Robusta Kubernetes observability tool logo", link: "https://home.robusta.dev/" },
    { name: "Alert Manager", url: alertManager, alt: "Prometheus Alert Manager notification system logo", link: "https://prometheus.io/docs/alerting/latest/alertmanager/" },
    { name: "Azure", url: azure, alt: "Microsoft Azure cloud computing platform logo", link: "https://azure.microsoft.com/" },
    { name: "Digital Ocean", url: digitalOcean, alt: "Digital Ocean cloud hosting provider logo", link: "https://www.digitalocean.com/" },
    { name: "Uptime Kuma", url: uptimekuma, alt: "Uptime Kuma self-hosted monitoring tool logo", link: "https://uptime.kuma.pet/" },
    { name: "Pulsar", url: pulsar, alt: "Apache Pulsar distributed messaging system logo", link: "https://pulsar.apache.org/" },
    { name: "Concourse CI", url: concourse, alt: "Concourse CI pipeline automation tool logo", link: "https://concourse-ci.org/" },
    { name: "Node.js", url: node, alt: "Node.js JavaScript runtime environment logo", link: "https://nodejs.org/en" },
    { name: "Python", url: python, alt: "Python programming language logo", link: "https://www.python.org/" },
    { name: "Kafka", url: kafka, alt: "Apache Kafka event streaming platform logo", link: "https://kafka.apache.org/" },
    { name: "RabbitMQ", url: rabbitmq, alt: "RabbitMQ message broker logo", link: "https://www.rabbitmq.com/" },
    { name: "Traefik", url: traefik, alt: "Traefik reverse proxy and load balancer logo", link: "https://traefik.io/traefik/" },
    { name: "Apache", url: apache, alt: "Apache HTTP server web hosting logo", link: "https://httpd.apache.org/" },
    { name: "Fleet CD", url: fleetcd, alt: "Fleet CD Kubernetes GitOps deployment logo", link: "https://fleet.rancher.io/" },
    { name: "Angular", url: angular, alt: "Angular web application framework logo", link: "https://angularjs.org/" },
    { name: "React", url: react, alt: "React JavaScript library for UI development logo", link: "https://react.dev/" },
    { name: "Flux CD", url: fluxcd, alt: "Flux CD continuous delivery GitOps logo", link: "https://fluxcd.io/" },
    { name: "Puppet", url: puppet, alt: "Puppet configuration management automation tool logo", link: "https://www.puppet.com/" },
    { name: "Progress Chef", url: progresschef, alt: "Progress Chef infrastructure automation tool logo", link: "https://www.chef.io/" }
]
