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
    { name: "Prometheus", url: prometheus, alt: "Prometheus", link: "https://prometheus.io/" },
    { name: "AWS", url: aws, alt: "Amazon Web Services Logo", link: "https://aws.amazon.com/getting-started/?nc2=h_ls" },
    { name: "GCP", url: gcp, alt: "Google Cloud Platform", link: "https://cloud.google.com/z" },

    
    { name: "Bootstrap", url: bootstrap, alt: "Bootstrap", link: "https://getbootstrap.com/" },
]

export const level2 = [
    { name: "Github", url: github, alt: "Github", link: "https://github.com/" },
    { name: "Grafana", url: grafana, alt: "Grafana", link: "https://grafana.com/" },
    { name: "Docker", url: docker, alt: "Docker", link: "https://www.docker.com/" },
    { name: "Laravel", url: laravel, alt: "Laravel", link: "https://laravel.com/" },
    { name: "Golang", url: go, alt: "Golang", link: "https://go.dev/" },
    { name: "Kubernetes", url: kubernetes, alt: "Kubernetes", link: "https://kubernetes.io/" },
    
    
    
    { name: "Helm", url: helm, alt: "Helm", link: "https://helm.sh/" },
    { name: "Redis", url: redis, alt: "Redis", link: "https://redis.io/" },
]

export const level3 = [
    { name: "Postgres", url: postgres, alt: "Postgres", link: "https://www.postgresql.org/" },
    { name: "MySQL", url: mysql, alt: "MySQL", link: "https://www.mysql.com/" },
    { name: "Terraform", url: terraform, alt: "Terraform", link: "https://www.terraform.io/" },
    { name: "Flux CD", url: fluxcd, alt: "Flux CD", link: "https://fluxcd.io/" },
    { name: "GitLab", url: gitlab, alt: "GitLab", link: "https://about.gitlab.com/" },
    { name: "Forgejo", url: forgejo, alt: "Forgejo Self-Hosted Git Service Logo", link: "https://forgejo.org/" },
    { name: "Keycloak", url: keycloak, alt: "Keycloak", link: "https://www.keycloak.org/" },
    { name: "Vue", url: vue, alt: "Vue", link: "https://vuejs.org/" },
    { name: "Vault", url: vault, alt: "Vault", link: "https://www.hashicorp.com" },
    { name: "Kratos", url: kratos, alt: "Kratos", link: "https://www.ory.sh/kratos/" },
    
    { name: "Dexidp", url: dexidp, alt: "Dex IDP Identity Provider Logo", link: "https://dexidp.io/" },
    { name: "Drone CI", url: drone, alt: "Drone CI Continuous Integration Logo", link: "https://www.drone.io/" },
    { name: "ArgoCD", url: argo, alt: "ArgoCD Continuous Deployment Logo", link: "https://argoproj.github.io/cd/" },
    { name: "Authentik", url: authentik, alt: "Authentik Identity Provider Logo", link: "https://github.com/goauthentik/authentik" },
    { name: "Laravel", url: laravel, alt: "Laravel PHP Framework Logo", link: "https://laravel.com/" },
    { name: "EMQX", url: emqx, alt: "EMQX MQTT Broker Logo", link: "https://www.emqx.io/" },
    { name: "Bootstrap", url: bootstrap, alt: "Bootstrap CSS Framework Logo", link: "https://getbootstrap.com/" },
]

export const level4 = [
    { name: "Loki", url: loki, alt: "Loki", link: "https://grafana.com/oss/loki/" },
    { name: "Robusta", url: robusta, alt: "Robusta", link: "https://home.robusta.dev/" },
    { name: "Alert Manager", url: alertManager, alt: "Alert Manager", link: "https://prometheus.io/docs/alerting/latest/alertmanager/" },
    { name: "Azure", url: azure, alt: "Azure", link: "https://azure.microsoft.com/" },
    { name: "Digital Ocean", url: digitalOcean, alt: "AzuDigital Oceanre", link: "https://www.digitalocean.com/" },
    { name: "Uptime Kuma", url: uptimekuma, alt: "Uptime Kuma Monitoring Tool Logo", link: "https://uptime.kuma.pet/" },
    { name: "Pulsar", url: pulsar, alt: "Apache Pulsar Messaging System Logo", link: "https://pulsar.apache.org/" },
    { name: "Concourse CI", url: concourse, alt: "Concourse CI Pipeline Automation Logo", link: "https://concourse-ci.org/" },
    { name: "NodeJs", url: node, alt: "Node.js JavaScript Runtime Logo", link: "https://nodejs.org/en" },
    { name: "Python", url: python, alt: "Python", link: "https://www.python.org/" },
    { name: "Kafka", url: kafka, alt: "Kafka", link: "https://kafka.apache.org/" },
   
    { name: "RabbitMQ", url: rabbitmq, alt: "RabbitMQ Message Broker Logo", link: "https://www.rabbitmq.com/" },
    { name: "Traefik", url: traefik, alt: "Traefik Reverse Proxy Logo", link: "https://traefik.io/traefik/" },
    { name: "Apache", url: apache, alt: "Apache HTTP Server Logo", link: "https://httpd.apache.org/" },
    { name: "Fleet CD", url: fleetcd, alt: "Fleet CD GitOps Deployment Logo", link: "https://fleet.rancher.io/" },
    { name: "Angular", url: angular, alt: "Angular Web Framework Logo", link: "https://angularjs.org/" },
    { name: "React", url: react, alt: "React JavaScript Library Logo", link: "https://react.dev/" },
    { name: "Flux CD", url: fluxcd, alt: "Flux CD Continuous Delivery Logo", link: "https://fluxcd.io/" },
    { name: "Puppet", url: puppet, alt: "Puppet Configuration Management Logo", link: "https://www.puppet.com/" },
    { name: "Progress Chef", url: progresschef, alt: "Progress Chef Automation Tool Logo", link: "https://www.chef.io/" },
]
